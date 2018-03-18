Rails.application.routes.draw do

  get('status' => 'status#index')

  namespace :api do
    namespace :v1 do
      resources :riders
      resources :slogans
    end
  end
end
