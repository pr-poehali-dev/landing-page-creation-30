CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    pet_name VARCHAR(255) NOT NULL,
    animal_type VARCHAR(50) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    package VARCHAR(100) NOT NULL,
    details TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);

COMMENT ON TABLE bookings IS 'Заявки на бронирование с сайта';
COMMENT ON COLUMN bookings.owner_name IS 'Имя владельца питомца';
COMMENT ON COLUMN bookings.phone IS 'Телефон для связи';
COMMENT ON COLUMN bookings.pet_name IS 'Имя питомца';
COMMENT ON COLUMN bookings.animal_type IS 'Вид животного (dog, cat, rodent, bird, reptile)';
COMMENT ON COLUMN bookings.check_in IS 'Дата заселения';
COMMENT ON COLUMN bookings.check_out IS 'Дата выселения';
COMMENT ON COLUMN bookings.package IS 'Выбранный пакет услуг';
COMMENT ON COLUMN bookings.details IS 'Особенности питомца';
COMMENT ON COLUMN bookings.status IS 'Статус заявки (new, confirmed, cancelled, completed)';
COMMENT ON COLUMN bookings.created_at IS 'Дата и время создания заявки';
