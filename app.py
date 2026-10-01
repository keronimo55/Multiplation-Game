from flask import Flask,render_template,request,redirect,url_for,jsonify
from flask import abort
from urllib.parse import urlparse, urljoin
app = Flask(__name__)

@app.route("/game/<string:time>",methods=["GET"])
def game(time): 

    try: 
        if 10<=int(time) and int(time)<=300:
            return render_template("game.html",time=time)
        else:
            return redirect_back(default='main')
    except:
        return abort(404)
  
    


@app.route("/",methods=["GET"])
def main():

    return render_template("menu.html") 


    
############


def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc

def redirect_back(default='index', **kwargs):
    # 1. Check for an explicit 'next' argument in the query string
    # 2. Check the HTTP referrer header
    # 3. Fall back to a default route
    for target in request.args.get('next'), request.referrer:
        if target and is_safe_url(target):
            return redirect(target)
    return redirect(url_for(default, **kwargs))


if __name__=="__main__":
    app.run(debug=True)