from flask import Flask, request, jsonify
from flask_cors import CORS
from connet import Connetction

app = Flask(__name__)
CORS(app)
conn = Connetction()

@app.route('/uplode', methods=['POST'])
def uplode():

    db = conn.connect().world_cup_list

    db.player.insert_many(request.json)
    conn.close()
    return jsonify({'status': 'ok'})

@app.route('/get_top_players', methods=['POST'])
def get():
    try:
        data = request.get_json()
        Year = int(data['year'])
        Team1 = data['team1']
        Team2 = data['team2']
        MatchId= data['matchId']
        db = conn.connect().world_cup_list
        players = db.player.find({'year': Year}, {'_id': False})
        players = list(players)[0]["matches"]

        filter_matchs=[]
        for i in players:
            if i['team1']==Team1 and i["team2"]==Team2 and i["matchId"]==MatchId:
                filter_matchs.append(i)
        if len(filter_matchs)==0:
            return jsonify({'status': 'error', 'message': 'No data found'})

        team1_players=filter_matchs[0]["team1_players"]
        sorted_players1 = sorted(team1_players, key=lambda x: (x.get('runs', 0), x.get('wickets', 0)), reverse=True)
        team2_players=filter_matchs[0]["team2_players"]
        sorted_players2 = sorted(team2_players, key=lambda x: (x.get('runs', 0), x.get('wickets', 0)), reverse=True)
        
        batsman1=sorted_players1[:2]
        batsman2=sorted_players2[:2]
        bowler1=sorted_players1[-1:]
        bowler2=sorted_players2[-1:]

        filter_matchs[0]["team1_players"]=batsman1+bowler1
        filter_matchs[0]["team2_players"]=batsman2+bowler2




        conn.close()
        return jsonify({'status': 'ok', 'players': filter_matchs})
    
    except Exception as e:
        print(e)
        return jsonify({'status': 'error', 'message': 'Something went wrong'})



if __name__ == '__main__':
    app.run(debug=True)

