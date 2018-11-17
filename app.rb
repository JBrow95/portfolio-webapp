require 'sinatra'

get '/' do
    
    erb :dashboard, :layout => :layout
end