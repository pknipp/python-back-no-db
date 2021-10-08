FROM nikolaik/python-nodejs:python3.8-nodejs14 as base

WORKDIR /var/www
COPY . .

# Install Python Dependencies
RUN ["pip", "install", "-r", "requirements.txt"]
RUN ["pip", "install", "psycopg2"]


# Build our React App
RUN ["npm", "install", "--prefix", "client"]
RUN ["npm", "run", "build", "--prefix", "client"]

# Move our react build for Flask to serve
# Use cp here because we're copying files inside our working directory, not from
# our host machine.
RUN ["cp", "-r", "client/build", "no_db/static"]
RUN ["cp", "-r", "no_db/static/static/js", "no_db/static"]
RUN ["cp", "-r", "no_db/static/static/css", "no_db/static"]

# Setup Flask environment
ENV FLASK_APP=no_db
ENV FLASK_ENV=production

EXPOSE 8000

# Run flask environment
CMD gunicorn no_db:app
