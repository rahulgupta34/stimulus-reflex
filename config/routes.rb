Rails.application.routes.draw do
  get "/user", to: "user#index"
  resources :student, except: %i[ show ]
  root "life_cycle#index"
end
