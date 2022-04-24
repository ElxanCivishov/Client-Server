# M3_Client-Server





Modul 3. "Valyuta konvertoru tərtibatı" layihəsi

.................................................................................

Layihənin  son versiyasının Replit linki    

https://Client-Server.elxancivishov.repl.co

.................................................................................

Açıq API-dən aktual məlumatları əldə edərək onlayn valyuta çeviricisi tərtib etmək:
https://exchangerate.host/#/#docs 
Valyuta məzənnəsi haqqında məlumat əldə etmək üçün URL-ə bu valyutaların iki abreviaturasını əlavə edərək (boşluq və ayırıcılar olmadan) valyuta cütü haqqında məlumat sorğulamaq lazımdır.

USD və RUB cütü üçün nümunə:
https://api.exchangerate.host/latest?base=USD&symbols=RUB 

Cavab JSON obyekti olaraq qayıdır.
Bu obyektin rates dəyişənində key-value cütləri şəklində obyekt var. RUB key-inə uyğun ədəd — hazırda olan cari məzənnə var.

Kalkulyatorun idarəetmə elementlərindən istifadə edərək istifadəçi iki valyuta və konvertasiya ediləcək məbləği seçmək imkanı əldə edir.
Seçdikdən sonra kalkulyator çarpaz kursu və yekun məbləği göstərir. 

Yükləmə xətası halının emal olunmasını təmin edilməlidir.

Tələblər

İnterfeys layout-a uyğun olmalıdır:

https://www.figma.com/file/jprZt6p7xO6T7oj85woJyi/Converter-m4-part-time?node-id=59%3A0 

Başlıq üçün yalnız layout realizasiya olunmuşdur. Linklər və düymələrə hər hansı əməliyyat bağlamağa ehtiyac yoxdur.

Valyutaları daxil etmək üçün iki input. Rəqəm və nöqtələrin daxil edilməsi, həmçinin vergül daxil edildikdə onun nöqtəyə çevrilməsi mümkündür. 

Default olaraq sahələr aşağıdakı formatda əvvəlcədən doldurulur:

Sol sahədə bir ədədi daxil edilmişdir.

Sağ sahə isə sol sahədə olan ədədlə alınmış valyuta vahidi üzrə ədədin hasili ilə doldurulur.

Sahələrin yaxınlığında valyuta seçmək üçün düymə mövcuddur. 

İki eyni valyuta seçərkən serverə sorğu göndərməyə ehtiyac yoxdur. Default  olaraq sol sahə üçün RUB, sağ sahə üçün isə ABŞ dolları seçilmişdir (layout-da olduğu kimi).

Konvertor həm dəyişdirilən valyutanın istənilənə, həm də istənilən valyutanın dəyişdirilənə kursunu göstərə bilir.
API əlçatmaz olduqda və ya ona sorğu göndərərkən xəta olarsa, proqram donmur, fəaliyyətini dayandırmır və  istifadəçiyə nəyinsə səhv getdiyi barədə mesaj göstərilir.

Layihə GitHub-da ayrıca repozitoriyada olmalıdır.


Çeklist

Şərt


1- Layihə faylını yükləyərkən ekranda istifadəçi interfeysinin lazımi elementlərini nəzərdən keçiririk. İdarəetmə vasitələri düzgün default qiymətlərə malikdir. 



2- Default olaraq iki valyuta seçilmişdir: RUB və USD.



3-Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.

4-Sağda USD valyutasını təyin edir, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.

5-Soldakı valyutanı EUR-ya dəyişdirilir.

6- Sağ inputun dəyəri cari EUR/USD məzənnəsi ilə yenidən hesablanır.


7- Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.

8- Sağda isə USD valyutasını təyin edirik.

9- Sağdakı valyutanı EUR-ya dəyişirik.

10- Sağ inputun dəyəri cari RUB/EUR məzənnəsinə uyğun yenidən hesablanır.
   
   
11- Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.

12- Sağda isə USD valyutasını təyin edirik, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.


13- Sağ inputun dəyəri cari məzənnə ilə yenidən hesablanır və iki dəfə böyük olur.



14- Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.

15- Sağda isə USD valyutasını təyin edirik, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.

16- Sağ inputun dəyərini 100-ə dəyişdiririk.

17- Sol inputun dəyəri cari məzənnə ilə yenidən hesablanır.


18- Chrome brauzerində developer alətlərini açın. Network tabına keçin, Throttling sahəsini tapın (Default olaraq Onlayn təyin olunmuşdur) və onu Oflayn seçin. 

19- Sahələrdən birinin dəyərini dəyişdirin. İstifadəçiyə nəyinsə səhv getdiyi barədə mesaj göstərildi.




