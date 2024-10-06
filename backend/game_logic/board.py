class Board:
    def __init__(self, game_type='nine_mens_morris'):
        """Initialize the board with a 7x7 grid and valid positions."""
        self.size = 7
        self.grid = [[None for _ in range(7)] for _ in range(7)]  # 7x7 grid with None values
        self.valid_positions = self.get_valid_positions()

    def get_valid_positions(self, game_type='nine'):
        """Return the valid positions for placing pieces based on the game type."""
        if game_type == 'nine':
            # Valid positions for Nine Men's Morris
            return [
                (0, 0), (0, 3), (0, 6),  # Top row
                (1, 1), (1, 3), (1, 5),  # Second row
                (2, 2), (2, 3), (2, 4),  # Third row
                (3, 0), (3, 1), (3, 2), (3, 4), (3, 5), (3, 6),  # Middle row
                (4, 2), (4, 3), (4, 4),  # Fifth row
                (5, 1), (5, 3), (5, 5),  # Sixth row
                (6, 0), (6, 3), (6, 6),  # Bottom row
            ]
        elif game_type == 'twelve':
            # Valid positions for Twelve Men's Morris
            return [
                (0, 0), (0, 3), (0, 6),  # Top row
                (1, 1), (1, 3), (1, 5),  # Second row
                (2, 2), (2, 3), (2, 4),  # Third row
                (3, 0), (3, 1), (3, 2), (3, 4), (3, 5), (3, 6),  # Middle row
                (4, 2), (4, 3), (4, 4),  # Fifth row
                (5, 1), (5, 3), (5, 5),  # Sixth row
                (6, 0), (6, 3), (6, 6),  # Bottom row
                (1, 0), (1, 2), (1, 4), (1, 6),  # Additional points for Twelve
                (2, 0), (2, 1), (2, 5), (2, 6),  # Additional points for Twelve
                (3, 3),  # Center point
                (4, 0), (4, 1), (4, 5), (4, 6),  # Additional points for Twelve
                (5, 0), (5, 2), (5, 4), (5, 6),  # Additional points for Twelve
                (6, 1), (6, 2), (6, 4), (6, 5),  # Additional points for Twelve
            ]
        else:
            raise ValueError("Invalid game type. Choose 'nine' or 'twelve'.")

    def is_valid_position(self, x, y):
        """Check if the given (x, y) position is valid within the board."""
        return (x, y) in self.valid_positions

    def display(self):
        """Display the current board layout (for debugging)."""
        for row in self.grid:
            print(row)
