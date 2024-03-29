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
      # supervisor_id: rand(1..7)
      supervisor_id: params[:supervisor]
    )
    new_intern.to_json(only: [:id, :name, :email], include: [department: {only: [:specification]}, supervisor: {only: [:name]}])
  end

  delete "/interns/:id" do
    deleted = Intern.find(params[:id])
    deleted.destroy
    deleted.to_json
  end


  get "/departments" do
    all_depts = Department.all
    all_depts.to_json(include: [supervisors: {only:[:name, :email]}, interns: {only:[:name, :email]}])
  end

  get "/supervisors" do
    all_sups = Supervisor.all
    all_sups.to_json(include: [interns: {only:[:name, :email]}, departments: {only:[:specification]}])
  end
  
  get "/interns/:id" do 
    intern = Intern.find(params[:id])
    intern.to_json
  end

  patch "/interns/:id" do 
    edit = Intern.find(params[:id])
    edit.update(
      name: params[:name],
      email: params[:email],
      department_id: params[:department],
      supervisor_id: rand(1..7)
    )
    edit.to_json
  end

end
