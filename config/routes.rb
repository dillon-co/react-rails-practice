Rails.application.routes.draw do
  resources :records

  post 'create_new_record' => 'records#create_new_record'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
