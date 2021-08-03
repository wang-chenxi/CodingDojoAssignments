import java.util.HashMap;

/**
 * TrackList
 */
public class TrackList {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<>();
        trackList.put("以父之名", "仁慈的父我已坠入，看不见罪的国度");
        trackList.put("晴天", "故事的小黄花，从开始的那年就飘着");
        trackList.put("双节棍", "东亚病夫的招牌，已被我一脚踢开");
        trackList.put("三年二班", "这第一名到底有多强，到底还要过多少关");

        for (String track : trackList.keySet()) {
            System.out.println("Track: " + track + " Lyrics: " + trackList.get(track));
        }
    }
}