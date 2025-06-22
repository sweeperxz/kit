export function GoogleMap() {
  return (
    <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1640531829154!2d30.5234!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce637bfe1717%3A0x5370c2254ad1b952!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCw!5e0!3m2!1suk!2sua!4v1639000000000!5m2!1suk!2sua"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта розташування кафедри"
      />
    </div>
  )
}
