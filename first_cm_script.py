from createsend import *

auth = {'api_key':'otYR1hX2Rwul5NfryE/34LF2dpnEq54yCYn3ezdGVsEx5m6Ii3JJ0xp1+RpBPsnD2M3Nw7O2fkWTfZTFhGsK6YfZ2bFe2q/f0BVMLC1M08x45xlTEi3KSzjzASFxtxp0Wlepoi9SVYr6ga/vF7bd4A=='}

cs=CreateSend(auth)
clients = cs.clients()
subscribers = cs.subscribers()


print(clients)
print(clients.client_id)

for cl in clients:
  print("Client: %s" % cl.Name)
  #print("Client ID: %s" % cl.client_id)

my_list = List(auth)

my_list.create("2bd21ec1091ba743b483563a25062a61", "API List 4", "", False, "")
print(self.list_id)


my_subscriber = Subscriber(auth)

custom_fields = [{"Key": 'website', "Value": 'http://example.com/'}]

my_subscriber.add("7c480b336839fbba731ca50c5d269666", "jashton+api3@sailthru.com", "Subscriber", custom_fields, True, "yes")
