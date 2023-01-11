Sunucu üzerinde geliştirme işlemini tamamladıktan sonra onun anında güncellenmesi için hazırlanmıştır.

kurulum "npm kurulum -D nodemon" biçimleri terminalimizde çalıştırıyoruz.
package.jsonda da server şeklindeki sunucumuzun çalıştırılma adımını ekliyoruz. 
	"start": "node index.js", 
	"server": "nodemon index.js", 
	"test": "echo "Hata: test görülmedi" && çıkış 1"

daha sonrada
	"npm run server" şeklinde terminalimizde çalıştırıyoruz.
