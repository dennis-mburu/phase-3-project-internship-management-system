class Department < ActiveRecord::Base
    has_many :interns
    has_many :supervisors, through: :interns
end


#To remove Later. Added for quick acces while debugging with pry
department1 = Department.first
department1.interns
department1.supervisors #Some supervisors are repetitive