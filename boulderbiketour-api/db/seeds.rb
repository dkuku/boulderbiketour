csv_text = File.read('riders.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts(row.to_hash)
  Rider.create!(row.to_hash)
end
