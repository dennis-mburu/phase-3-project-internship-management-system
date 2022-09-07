class Intern < ActiveRecord::Base
    belongs_to :department
    belongs_to :supervisor
end


#To remove Later. Added for quick acces while debugging with pry
# intern1 = Intern.first
# intern1.department
# intern1.supervisor