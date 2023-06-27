package discord;

import javax.security.auth.login.LoginException;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.User;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class MyBot extends ListenerAdapter {

	public static void main(String[] args) {

		try {

			JDA jda = JDABuilder.createDefault("Insert token").build();

			jda.addEventListener(new MyBot());
			
			UI ui = new UI();
			ui.setVisible(true);
			ui.setSize(500, 500);

		} catch (LoginException e) {

			e.printStackTrace();
		}

	}

	@Override
	public void onMessageReceived(MessageReceivedEvent event) {

		User author = event.getAuthor();
		Message message = event.getMessage();

		String answer = Rasa.interact(message.getContentRaw());

		MessageChannel channel = event.getChannel();

		if (author.isBot())
			return;

		channel.sendMessage(answer).queue();

	}

}
