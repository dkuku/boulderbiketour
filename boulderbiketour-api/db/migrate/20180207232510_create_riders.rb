class CreateRiders < ActiveRecord::Migration[5.1]
  def change
    create_table :riders do |t|
      t.string :first
      t.string :last
      t.string :city
      t.string :state
      t.decimal :lat, precision: 13, scale: 9
      t.decimal :lng, precision: 13, scale: 9

      t.timestamps
    end
  end
end
