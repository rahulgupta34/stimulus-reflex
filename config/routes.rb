Rails.application.routes.draw do
  
  root "home#index"
  get "/counter", to: "counter#counter"
end
