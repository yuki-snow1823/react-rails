class CreateRails < ActiveRecord::Migration[7.0]
  def change
    create_table :rails do |t|
      t.string :db
      t.string :migrate

      t.timestamps
    end
  end
end
