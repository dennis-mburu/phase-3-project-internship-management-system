class CreateSupervisors < ActiveRecord::Migration[6.1]
  def change
    create_table :supervisors do |t|
      t.string :name
      t.string :email
      t.integer :work_experience_in_years
    end
  end
end
