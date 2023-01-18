Rails.application.routes.draw do
  get "/user", to: "user#index"
  root "life_cycle#index"
end
