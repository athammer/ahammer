import { BlogPost } from "~/features/blog/ui/BlogPost";
import { BlogParagraph } from "~/features/blog/ui/BlogParagraph";
import { BlogParagraphSubsection } from "~/features/blog/ui/BlogParagraphSubsection";

export default function SettingUpSquarePaymentLinks() {
  return (
    <BlogPost title="Notes on Database Sharding">
      <BlogParagraph subtitle="What is Database Sharding?">
        Sharding is a database architecture pattern related to horizontal
        partitioning — the practice of separating one table’s rows into multiple
        different tables, known as partitions. Each partition has the same
        schema and columns, but also entirely different rows. Likewise, the data
        held in each is unique and independent of the data held in other
        partitions. There are many types of sharding strategies.
      </BlogParagraph>

      <BlogParagraph subtitle="Key/Hash Based Sharding">
        Key or hash based sharding is very simple. It involves taking a value
        from a record and hashing it and using that hash, assign a database
        shard to put that record in. This is most often done with unique values
        such as ids.
        <BlogParagraphSubsection subSectionTitle="Advantages">
          <ul class="list-disc">
            <li>Very easy to implement</li>
            <li>
              Keys are distributed evenly, assuming your hash function is sound
            </li>
          </ul>
        </BlogParagraphSubsection>
        <BlogParagraphSubsection subSectionTitle="Downsides">
          <ul class="list-disc">
            <li>
              Hard to add new/remove shards as you have to remap most if not all
              keys to the total number of shards.
              <ul class="list-disc">
                <li>
                  For example if you're hash depends on the last two numbers of
                  an int and that int is 125 and you have 7 shards, so 25 % 7 =
                  4, would mean you would have to totally remap if you removed a
                  shard so 25 % 6 = 1
                </li>
              </ul>
            </li>
          </ul>
        </BlogParagraphSubsection>
      </BlogParagraph>

      <BlogParagraph subtitle="Key/Hash Based Sharding With Consistent Hashing">
        You may of noticed in the Key/Hash Based Sharding section that a lot
        depends on your hash function being sound. However we can extend that to
        drastically reduce the amount of keys that need to be remapped. With
        consistent hashing only `n / m` keys need to be remapped on average
        where *n* is the number of keys and *m* is the number of slots. It does
        this by representing the system/server/clients as a virtual ring
        structure called a hashring seen below.
        <img
          src="/images/blog/notes-on-database-sharding/hashring.webp"
          alt="hashring diagram"
          class="mb-2"
        />
        The hashring is said to have an infinite number of points you can place
        servers on, really this depends on your the cardinality of the outputs
        for your hash function but in practice it is true. Servers are often
        placed after all of the keys are figured out to place servers where
        there are the most current keys.
        <br />
        When a request comes in it goes to a point in the hashring and goes
        clockwise on the ring till it finds the closest server. If a server is
        unresponsive it can hop to the next node to see if it has a copy.
        <img
          src="/images/blog/notes-on-database-sharding/consistent-hashing-request-flow.webp"
          alt="hashring request flow diagram"
          class="mb-2"
        />
        <BlogParagraphSubsection subSectionTitle="Advantages">
          <ul class="list-disc">
            <li>Very easy to add/remove servers</li>
            <li>
              Lessons the burden of serves failing as the keys it(or a new
              server) needs to take on is less
            </li>
            <li>
              Servers can easily and should store keys from other servers to
              increase availability
            </li>
            <li>
              Can easily further decrease possible hotspots by putting servers
              on the hashring n times randomly with a new hash function
            </li>
          </ul>
        </BlogParagraphSubsection>
        <BlogParagraphSubsection subSectionTitle="Downsides">
          <ul class="list-disc">
            <li>Complex</li>
            <li>Increase overall server and memory usage</li>
          </ul>
        </BlogParagraphSubsection>
      </BlogParagraph>

      <BlogParagraph subtitle="Range Based Sharding">
        Range based sharding is where you take a range and assign it to a
        database shard. Typically most useful when you have a fixed range. If
        there is no range and they key maps one-to-one with the shard it's
        called **Directory Based Sharding** and performs very similarly
        <BlogParagraphSubsection subSectionTitle="Advantages">
          <ul class="list-disc">
            <li>Very easy to implement</li>
            <li>
              If key source is purely random, keys are distributed evenly.
            </li>
            <li>Can more easily add/remove database shards</li>
          </ul>
        </BlogParagraphSubsection>
        <BlogParagraphSubsection subSectionTitle="Downsides">
          <ul class="list-disc">
            <li>
              Keys, even if they appear or are said to be random are very often
              not random. This will cause some shards to become hotspots and
              have many more reads and writes than others.
            </li>
          </ul>
        </BlogParagraphSubsection>
      </BlogParagraph>

      <BlogParagraph subtitle="Use Cases">
        <ul class="list-disc">
          <li>
            When a dataset won't fit on a single server or write's overtake the
            capacity of your server
          </li>
        </ul>
      </BlogParagraph>

      <BlogParagraph subtitle="Quick Facts and Notes">
        <ul class="list-disc">
          <li>
            You should only shard if the dataset cannot fit on one machine or
            your write's are bottlenecking you, else you should handle load
            through read-replicas as it reduces complexity, and increases
            performance and durability
          </li>
          <li>
            It also also very hard to go back once you shard your database
          </li>
        </ul>
      </BlogParagraph>

      <BlogParagraph subtitle="Sources and Learning Material">
        <ul class="list-disc">
          <li>
            https://www.digitalocean.com/community/tutorials/understanding-database-sharding
          </li>
          <li>https://www.geeksforgeeks.org/consistent-hashing/</li>
          <li>https://www.baeldung.com/</li>
          <li>
            https://ably.com/blog/implementing-efficient-consistent-hashing
          </li>
        </ul>
      </BlogParagraph>
    </BlogPost>
  );
}
