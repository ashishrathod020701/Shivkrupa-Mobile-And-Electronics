"""
Shivkrupa Mobile & Electronics Website
A professional website for a local electronics repair shop
No database, no customer data storage
"""

from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    """Home page"""
    return render_template('index.html')

@app.route('/services')
def services():
    """Services page"""
    return render_template('services.html')

@app.route('/about')
def about():
    """About us page"""
    return render_template('about.html')

@app.route('/repair')
def repair():
    """Repair service request page"""
    return render_template('repair.html')

@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
