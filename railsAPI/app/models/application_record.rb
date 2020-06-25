class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  validate :validate_name_not_including_symbols

  private

  def validate_name_not_including_symbols
    errors.add(:name, 'に記号を含めることはできません') if !(name !~ /\W+?/)
  end
end
