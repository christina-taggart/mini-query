get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/bands' do
  @band_names = Band.all.map(&:name)
  erb :bands
end

post '/bands' do
  new_band = Band.create!(name: params[:name])
  new_band.name
end

get '/info' do
  Demo.new(self).info
end

get '/lamer' do
  status 422

  erb :index
end
