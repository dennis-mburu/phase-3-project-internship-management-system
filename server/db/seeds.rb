puts "🌱 Seeding spices..."

# Seed your database here

Department.create(specification: "cyber-security", requirements:"basic linux administration")
Department.create(specification: "Networking", requirements:"basic TCP/IP knowledge")
Department.create(specification: "cloud-computing", requirements:"Azure or AWS or Google Cloud certification")
Department.create(specification: "Web development", requirements:"proficient with at least one back-end language")
Department.create(specification: "Front End Designer", requirements:"Must be very creative and artistic")
Department.create(specification: "Mobile App Development", requirements:"Familiar with react Native")
Department.create(specification: "Data Science", requirements:"MUST know python's numpy and pandas modules")
Department.create(specification: "Artificial Intelligence", requirements:"Well versed with Machine Learning Algorithms")
Department.create(specification: "Finance Accounting and Auditing", requirements:"CPA/CIA certified")
Department.create(specification: "Sales & Marketing", requirements:"3 months experience in sales")
Department.create(specification: "Management", requirements:"BBA Degree")


puts "✅ Done seeding!"
