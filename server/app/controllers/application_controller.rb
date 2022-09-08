class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/interns" do
    all_interns = Intern.all
    all_interns.to_json(only: [:id, :name, :email], include: :department)
    # all_interns.to_json(only: [:id, :name, :email])
  end

end
