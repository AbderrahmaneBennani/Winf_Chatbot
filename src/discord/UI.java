package discord;

import javax.swing.*;

public class UI extends JFrame {
    public UI() {
        setTitle("Bot");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        JLabel label = new JLabel("Close to stop Bot");
        label.setHorizontalAlignment(SwingConstants.CENTER);
        getContentPane().add(label);
        
        pack();
        setLocationRelativeTo(null);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            UI app = new UI();
            app.setVisible(true);
        });
    }
}
