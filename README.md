# node-express-with-nodemon-1
Server üzerinde geliştirme işlemi yaptıktan sonra onun anında güncellenmesi için hazırlanmıştır.

kurulum
npm kurulum -D düğümü
package.jsonda da server şeklindeki sunucumuzun çalıştırılma adımını ekliyoruz.
    "start": "node index.js",
    "sunucu": "nodemon index.js",
    "test": "echo \"Hata: test belirtilmedi\" && çıkış 1"

daha sonrada  
     "npm run server" şeklindeki terminalimizde çalıştırıyoruz.
