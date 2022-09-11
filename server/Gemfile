source "https://rubygems.org"

# A DSL for quickly creating web applications
# https://github.com/sinatra/sinatra
gem "sinatra"

# A fast and simple web server
# https://github.com/macournoyer/thin
gem "thin"

# Rack middleware. Used specifically for parsing the request body into params.
# https://github.com/rack/rack-contrib
gem "rack-contrib"

# More Rack middleware! Used to handle CORS requests
# https://github.com/cyu/rack-cors
gem "rack-cors"

#active-record download
gem "activerecord"

#sinatra download
gem "sinatra-activerecord"

#rake console n commands
gem "rake"

#sqlite3 for this database


#Require all files in a folder
gem "require_all"

gem 'uri'

 gem "faker"

#use pry in the development phase only
group :development do
  gem "pry"
  gem "sqlite3"

  # Automatically reload when there are changes
  # https://github.com/alexch/rerun
  gem "rerun"
end

group :production do
    gem "pg"
end