package db

import "gorm.io/gorm"

func GetDB() *gorm.DB {
	return db
}
