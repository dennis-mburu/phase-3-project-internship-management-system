class Supervisor < ActiveRecord::Base
    has_many :interns
    has_many :departments, through: :interns
end


#To remove Later. Added for quick acces while debugging with pry
# supervisor1 = Supervisor.first
# supervisor1.departments
# supervisor1.interns