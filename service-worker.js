self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://github.com/PlayingerF') // arahkan ke halaman jika diklik
  );
});
