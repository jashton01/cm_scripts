@@ -0,0 +1,21 @@
from createsend import *


account_auth = {'api_key':'/7k+rgSybkxGMa64aUb+DPuAGpM5NxC3EjanNlSDjrRom3gKTHe6Z/t5GOJA9IlditAvifnjymZGVH6ZW1xqYE5EnuoJBr9hWXn7yscIZOyoeoJjugUcGix/fb8V2lzJIG+ab56sLijjsgL49KGvWw=='}
client_auth = {'api_key':'otYR1hX2Rwul5NfryE/34LF2dpnEq54yCYn3ezdGVsEx5m6Ii3JJ0xp1+RpBPsnD2M3Nw7O2fkWTfZTFhGsK6YfZ2bFe2q/f0BVMLC1M08x45xlTEi3KSzjzASFxtxp0Wlepoi9SVYr6ga/vF7bd4A=='}


#my_list = List(client_auth)

#my_list.create("2bd21ec1091ba743b483563a25062a61", "API List 4", "", False, "")


my_subscriber = Subscriber(client_auth)

custom_fields = [{"Key": 'website', "Value": 'http://example.com/'}]

my_subscriber.add("7c480b336839fbba731ca50c5d269666", "jashton+scriptrun@sailthru.com", "James", custom_fields, True, "yes")

#my_client = Client(account_auth)

#my_client.create("Z API Test", "(GMT+10:00) Canberra, Melbourne, Sydney", "Australia")
