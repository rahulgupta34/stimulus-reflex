Rails.application.routes.draw do
  get "/selector", to: "example#show"
  root "example#index"
end
