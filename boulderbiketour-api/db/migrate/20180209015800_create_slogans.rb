class CreateSlogans < ActiveRecord::Migration[5.1]
  def change
    create_table :slogans do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :slogan

      t.timestamps
    end
  end
end
