import java.util.ArrayList;
import java.util.Arrays;


/**
 * @author 北辰不落雪 
 * @date 2017年7月20日 上午9:03:52 
 * @Description
 */
public class Test {
	public static void main(String[] args) {
		Object o = null;
		Bean x = (Bean)o;
		System.out.println(x == null);
		new ArrayList(Arrays.asList());
	}
}
