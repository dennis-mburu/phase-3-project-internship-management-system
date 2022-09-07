class CreateInterns < ActiveRecord::Migration[6.1]
  def change
    create_table :interns do |t|
      t.string :name
      t.string :email
      t.integer :department_id
      t.integer :supervisor_id
    end
  end
end
