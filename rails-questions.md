# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
SQL stands for structured query langauge and is used as the language to access the back end databases 


2. What the PostgreSQL query that would return all the content in a particular table?

select * 
from database 


3. What is the command to create a new Rails application with a PostgreSQL database?

rails new app_name -d postgreSQL -T



4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

rails generate model Meals breakfast:string lunch:string dinner:string


5. What is a migration? Why would you use one?

Migration in databases is changing the shape of a database. You would use migration to add columns, rename columns, delete columns, and change data type.


6. What is the command to generate a migration file?

rails generate migration add_item_to_schedule


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

the naming convention for generating a Rails model is either snake_case or PascalCase. the naming convention for the name of the table is upper Pascal case or if one word then uppercase the first letter.


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema is the file produced after you complete a rails db:migrate command. The schema updates after every migration. You can't modify the schema directly because the schema recieves its information from the console via migration instructions you create. 

9. What is the Rails console?

the Rails console is accessed by typing rails c in the terminal and allows you to make updates/modifications to the Rails app.


10. What is the Rails console command to see all the content in a particular table?

Model.all should return all of the data contained in the table Model 