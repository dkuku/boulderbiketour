require 'csv'

csv_text = File.read('riders.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts(row.to_hash)
  Rider.create!(row.to_hash)
end
puts "created riders from csv file"

5.times do |slogan|
  Slogan.create!(
    first: "name",
    last: "surname",
    email: "email#{slogan}@serv.com",
    slogan: "lorem ipsum dolor #{slogan}"
  )
end
puts "created 5 slogan rows"
