require 'rails_helper'
require 'spec_helper'

describe Book do
  it '1文字のタイトルは保存されない' do
    book = Book.new(title: 'h')
    expect(book).to be_invalid

    book.title = 'hoge'
    expect(book).to be_valid
  end
end
