module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :books, [Types::BookType], null: false
    def books
      Book.all
    end
    # herokuのテスト
  end
end
