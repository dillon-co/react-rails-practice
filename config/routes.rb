Rails.application.routes.draw do
  resources :records

  root to: 'records#new'
  post 'create_new_record' => 'records#create_new_record'
  get 'load_records' => 'records#load_records'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
