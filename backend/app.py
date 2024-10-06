from flask import Flask, jsonify, request
from flask_cors import CORS
from game_logic.board import Board
from game_logic.player import Player
from game_logic.gamemanager import GameManager

app = Flask(__name__)

CORS(app)

# Initialize the game
board = Board()
player1 = Player(1, 9)  # 9 pieces for Nine Men's Morris
player2 = Player(2, 9)
game_manager = GameManager(board, player1, player2)

# Add this in your Flask application
game_config = {}

@app.route('/api/start', methods=['POST'])
def start_game():
    global game_config
    game_config = request.get_json()  # Store game configuration

    # Validate the game configuration
    if not validate_game_config(game_config):
        return jsonify(success=False, message="Invalid game configuration")

    # Initialize game state based on configuration
    game_manager.initialize_game(game_config)

    return jsonify(success=True)

def validate_game_config(config):
    # Implement validation logic here
    # Check for required fields, data types, and valid values
    # For example:
    if "board_size" not in config or not isinstance(config["board_size"], int):
        return False
    if "player1_pieces" not in config or not isinstance(config["player1_pieces"], int):
        return False
    if "player2_pieces" not in config or not isinstance(config["player2_pieces"], int):
        return False

    # Add more validation rules as needed

    return True

@app.route('/api/config', methods=['GET'])
def get_config():
    """Get the current game configuration."""
    return jsonify(success=True, config=game_config)

@app.route('/api/place', methods=['POST'])
def place_piece():
    data = request.get_json()  # Get the position data from the frontend
    x = data['x']
    y = data['y']

    success = game_manager.place_piece(x, y)  # Use GameManager to place the piece
    return jsonify(success=success, board=game_manager.get_board_state())

@app.route('/api/board', methods=['GET'])
def get_board():
    """Get the current state of the board."""
    return jsonify(board=game_manager.get_board_state())

@app.route('/api/reset', methods=['POST'])
def reset_board():
    """Reset the board to its initial empty state."""
    global game_manager
    board = Board()  # Recreate the board
    player1 = Player(1, 9)  # Reset players with 9 pieces each
    player2 = Player(2, 9)
    game_manager = GameManager(board, player1, player2)
    return jsonify(success=True, board=game_manager.get_board_state())

if __name__ == '__main__':
    app.run(debug=True)
