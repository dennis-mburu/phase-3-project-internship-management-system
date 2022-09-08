class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/interns" do
    all_interns = Intern.all
    # all_interns.to_json(only: [:id, :name, :email])
    # all_interns.to_json(only: [:id, :name, :email], include: [:department, :supervisor])
    all_interns.to_json(only: [:id, :name, :email], include: [department: {only: [:specification]}, supervisor: {only: [:name]}])
  end


  post "/interns" do
    new_intern = Intern.create(
      name: params[:name],
      email: params[:email],
      department_id: params[:department],
      supervisor_id: rand(1..7)
    )
    new_intern.to_json
  end

end
