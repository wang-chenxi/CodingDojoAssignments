package com.chenxi.eventsbeltreviewer.dataseeds;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.chenxi.eventsbeltreviewer.models.State;
import com.chenxi.eventsbeltreviewer.repositories.StateRepository;

@Component
public class StateDataLoader implements CommandLineRunner {

	@Autowired
	private StateRepository repository;

	@Override
	public void run(String... args) throws Exception {
		loadStateData();
	}

	private void loadStateData() {
		if (repository.count() == 0) {
			State state1 = new State("AK");
			State state2 = new State("AL");
			State state3 = new State("AZ");
			State state4 = new State("AR");
			State state5 = new State("CA");
			State state6 = new State("CO");
			State state7 = new State("CT");
			State state8 = new State("DE");
			State state9 = new State("FL");
			State state10 = new State("GA");
			State state11 = new State("HI");
			State state12 = new State("ID");
			State state13 = new State("IL");
			State state14 = new State("IN");
			State state15 = new State("IA");
			State state16 = new State("KS");
			// NO 17
			State state18 = new State("KY");
			State state19 = new State("LA");
			State state20 = new State("ME");
			State state21 = new State("MD");
			State state22 = new State("MA");
			State state23 = new State("MI");
			State state24 = new State("MN");
			State state25 = new State("MS");
			State state26 = new State("MO");
			State state27 = new State("MT");
			State state28 = new State("NE");
			State state29 = new State("NV");
			State state30 = new State("NH");
			State state31 = new State("NJ");
			State state32 = new State("NM");
			State state33 = new State("NY");
			State state34 = new State("NC");
			State state35 = new State("ND");
			State state36 = new State("OH");
			State state37 = new State("OK");
			State state38 = new State("OR");
			State state39 = new State("PA");
			// NO 40
			State state41 = new State("RI");
			State state42 = new State("SC");
			State state43 = new State("SD");
			State state44 = new State("TN");
			State state45 = new State("TX");
			State state46 = new State("UT");
			State state47 = new State("VT");
			State state48 = new State("VA");
			State state49 = new State("WA");
			State state50 = new State("WV");
			State state51 = new State("WI");
			State state52 = new State("WY");
			// SAVE THE DATA TO DB
			repository.save(state1);
			repository.save(state2);
			repository.save(state3);
			repository.save(state4);
			repository.save(state5);
			repository.save(state6);
			repository.save(state7);
			repository.save(state8);
			repository.save(state9);
			repository.save(state10);
			repository.save(state11);
			repository.save(state12);
			repository.save(state13);
			repository.save(state14);
			repository.save(state15);
			repository.save(state16);
			repository.save(state18);
			repository.save(state19);
			repository.save(state20);
			repository.save(state21);
			repository.save(state22);
			repository.save(state23);
			repository.save(state24);
			repository.save(state25);
			repository.save(state26);
			repository.save(state27);
			repository.save(state28);
			repository.save(state29);
			repository.save(state30);
			repository.save(state31);
			repository.save(state32);
			repository.save(state33);
			repository.save(state34);
			repository.save(state35);
			repository.save(state36);
			repository.save(state37);
			repository.save(state38);
			repository.save(state39);
			repository.save(state41);
			repository.save(state42);
			repository.save(state43);
			repository.save(state44);
			repository.save(state45);
			repository.save(state46);
			repository.save(state47);
			repository.save(state48);
			repository.save(state49);
			repository.save(state50);
			repository.save(state51);
			repository.save(state52);
		}
		System.out.println(repository.count());
	}

}
