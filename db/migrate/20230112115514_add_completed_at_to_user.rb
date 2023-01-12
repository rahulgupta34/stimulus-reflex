class AddCompletedAtToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :completed_at, :string
  end
end
