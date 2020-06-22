# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|text|null: false|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :name
- has_many :mail
- has_many :password
- has_many :comments


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comments|string|foreign_key: true|

### Association
- has_many :comments


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
