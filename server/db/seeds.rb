puts "🌱 Seeding spices..."

# Seed your database here

Department.create(field: "I.T" ,specification: "cyber-security", requirements:"basic linux administration")
Department.create(field: "I.T" ,specification: "Networking", requirements:"basic TCP/IP knowledge")
Department.create(field: "I.T" ,specification: "cloud-computing", requirements:"Azure or AWS or Google Cloud certification")
Department.create(field: "I.T" ,specification: "Web development", requirements:"proficient with at least one back-end language")
Department.create(field: "I.T" ,specification: "Data Science", requirements:"MUST know python's numpy and pandas modules")
Department.create(field: "finance" ,specification: "Accounting", requirements:"CPA certified")
Department.create(field: "finance" ,specification: "Auditing", requirements:"CIA certified")
Department.create(field: "Mechanical Engineering" ,specification: "Production", requirements:"degree in Mechanical production")
Department.create(field: "Mechanical Engineering" ,specification: "Assembly", requirements:"diploma in Mechanical Engineering")
Department.create(field: "Electrical Engineering" ,specification: "Wiring", requirements:"diploma in Electrical Engineering")
Department.create(field: "Business" ,specification: "Sales & Marketing", requirements:"3 months experience in sales")
Department.create(field: "Business" ,specification: "Management", requirements:"BBA Degree")
Department.create(field: "Business" ,specification: "Human Resource", requirements:"Degree in Human Resources")








puts "✅ Done seeding!"
