Rails.application.routes.draw do
  get "/read", to: 'read_create#index'
  post "/create", to: 'read_create#create'
  
  root "home#index"
end
